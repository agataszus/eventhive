import { useEffect, useMemo, useState } from "react";
import { usePotentialPaymentDetailsMutation } from "../../queries/usePotentialPaymentDetailsMutation";
import { CreatePaymentDto } from "../../services/api/api-types.gen";
import { useShoppingCartStore } from "../../services/shoppingCartStore/useShoppingCartStore";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Text } from "../text/text";
import styles from "./checkoutSummary.module.scss";
import { parsePrice } from "../../helpers/parsePrice";
import { Loader } from "../loader/Loader";
import classNames from "classnames";
import { Error } from "../error/Error";
import { useMakePaymentMutation } from "../../queries/useMakePaymentMutation";
import { PaymentSuccessModal } from "../paymentSuccessModal/PaymentSuccessModal";

const BANK_NAME = "bankName";
const CARD_NUMBER = "cardNumber";

export const CheckoutSummary = () => {
  const {
    state: { cartContent },
  } = useShoppingCartStore();
  const [isCardInputANumber, setIsCardInputANumber] = useState(true);
  const [areAllInputs, setAreAllInputs] = useState(true);

  const { mutate, data, isLoading, isError } =
    usePotentialPaymentDetailsMutation();

  const {
    mutate: mutateMakePayment,
    isLoading: isLoadingMakePayment,
    isError: isErrorMakePayment,
    isSuccess,
  } = useMakePaymentMutation();

  const paymentContainerClass = classNames(styles.paymentContainer, {
    [styles.paymentHidden]: isLoading || isError,
  });

  const tickets = useMemo(
    () =>
      cartContent.map((item) => {
        return { ticketTypeId: item.ticket.id, amount: item.ticket.quantity };
      }),
    [cartContent]
  );

  useEffect(() => {
    const potentialPaymentData = {
      tickets,
      paymentMethod: CreatePaymentDto.PaymentMethodEnum.Card,
    };

    mutate(potentialPaymentData);
  }, [mutate, tickets]);

  const { netPrice, fees, vat, totalPrice } = data ?? {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginFormData = new FormData(event.target as HTMLFormElement);
    const bankNameValue = loginFormData.get(BANK_NAME) as string;
    const cardNumberValue = loginFormData.get(CARD_NUMBER) as string;

    if (Number.isNaN(Number(cardNumberValue))) {
      return setIsCardInputANumber(false);
    }
    setIsCardInputANumber(true);

    if (!bankNameValue || !cardNumberValue) {
      return setAreAllInputs(false);
    }

    setAreAllInputs(true);

    const createPaymentData = {
      tickets,
      paymentMethod: CreatePaymentDto.PaymentMethodEnum.Card,
      bankName: bankNameValue,
      lastFourDigits: cardNumberValue,
    };

    mutateMakePayment(createPaymentData);
  };

  return (
    <>
      <PaymentSuccessModal isOpen={isSuccess} />
      <div className={styles.checkoutContainer}>
        <Text tag="div" variant="heading-5" className={styles.title}>
          Checkout summary
        </Text>
        <div className={styles.pricesContainer}>
          {isLoading && <Loader variant="medium" />}
          {isError && (
            <Error message="Something went wrong. Try again later!" />
          )}
          {!isLoading && !isError && (
            <>
              {isErrorMakePayment && (
                <div className={styles.error}>
                  <Error message="Couldn't process the payment. Try again later!" />
                </div>
              )}
              {[
                { label: "Subtotal", value: netPrice },
                { label: "Fees", value: fees },
                { label: "Vat", value: vat },
              ].map(({ label, value }) => {
                return (
                  <div className={styles.priceRow} key={label}>
                    <Text tag="p" variant="caption-2">
                      {label}
                    </Text>
                    <Text tag="p" variant="caption-2">
                      {value ? parsePrice(value) : "-"}
                    </Text>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className={styles.totalPriceRow}>
          <Text tag="p" variant="action-1">
            Total
          </Text>
          {isLoading ? (
            <div className={styles.loader}>
              <Loader variant="extraSmall" />
            </div>
          ) : (
            <Text tag="p" variant="heading-5">
              {totalPrice ? parsePrice(totalPrice) : "-"}
            </Text>
          )}
        </div>
        <div className={paymentContainerClass}>
          <Text tag="div" variant="subtitle-2" className={styles.paymentTitle}>
            Payment details
          </Text>
          <form className={styles.form} onSubmit={handleSubmit}>
            {!areAllInputs && (
              <Text tag="p" variant="error-1">
                All input are required
              </Text>
            )}
            <Input
              name={BANK_NAME}
              type="text"
              placeholder="Bank"
              labelText="Bank Name"
            />
            <Input
              name={CARD_NUMBER}
              type="text"
              placeholder="Enter last 4 digits"
              labelText="Card number"
              minLength={4}
              maxLength={4}
            />
            {!isCardInputANumber && (
              <Text tag="p" variant="error-1">
                Card number has to be a 4 digits number
              </Text>
            )}
            <div className={styles.buttonContainer}>
              <Button
                text="Confirm payment"
                variant="thick"
                isLoading={isLoadingMakePayment}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
