import { useTicketQuery } from "../../queries/useTicketQuery";
import { QRCodeSVG } from "qrcode.react";
import { Loader } from "../loader/Loader";
import { Text } from "../text/text";
import {
  DESKTOP_SMALL,
  MOBILE,
  TABLET,
  useMediaQueries,
} from "../../hooks/useMediaQueries";
import { useMemo } from "react";

type TicketQRCodeProps = {
  id: number;
  variant: "small" | "large";
};

export const TicketQRCode = ({ id, variant }: TicketQRCodeProps) => {
  const { data: ticket, isLoading, isError } = useTicketQuery(id);

  const mediaQuery = useMediaQueries();

  const size = useMemo(() => {
    if (variant === "small") {
      if (mediaQuery === DESKTOP_SMALL || mediaQuery === TABLET) return 150;

      return 200;
    }

    if (variant === "large") {
      if (mediaQuery === MOBILE) return 240;

      return 340;
    }
  }, [mediaQuery, variant]);

  if (!ticket) return null;
  const {
    secret,
    type: { id: typeId },
  } = ticket;

  const ticketData = JSON.stringify({
    ticketId: id,
    typeId,
    secret,
  });

  if (isLoading) return <Loader variant="medium" />;

  if (isError)
    return (
      <Text tag="p" variant="error-1">
        Couldn&apos;t load the QR code
      </Text>
    );

  return <QRCodeSVG value={ticketData} size={size} />;
};
