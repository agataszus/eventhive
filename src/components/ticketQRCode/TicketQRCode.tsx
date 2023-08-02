import { useTicketQuery } from "../../queries/useTicketQuery";
import { QRCodeSVG } from "qrcode.react";
import { Loader } from "../loader/Loader";
import { Text } from "../text/text";

type TicketQRCodeProps = {
  id: number;
  variant: "small" | "large";
};

export const TicketQRCode = ({ id, variant }: TicketQRCodeProps) => {
  const { data: ticket, isLoading, isError } = useTicketQuery(id);

  let size;
  if (variant === "small") {
    size = 200;
  } else if (variant === "large") {
    size = 340;
  }

  if (!ticket) return null;

  if (isLoading) return <Loader variant="medium" />;

  const {
    secret,
    type: { id: typeId },
  } = ticket;

  const ticketData = JSON.stringify({
    ticketId: id,
    typeId,
    secret,
  });

  if (isError)
    return (
      <Text tag="p" variant="error-1">
        Couldn&apos;t load the QR code
      </Text>
    );

  return <QRCodeSVG value={ticketData} size={size} />;
};
