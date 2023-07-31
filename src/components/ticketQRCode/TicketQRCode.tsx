import { useTicketQuery } from "../../queries/useTicketQuery";
import { QRCodeSVG } from "qrcode.react";
import { Loader } from "../loader/Loader";
import { Text } from "../text/text";
import { DESKTOP_SMALL, useMediaQueries } from "../../hooks/useMediaQueries";

type TicketQRCodeProps = {
  id: number;
  variant: "small" | "large";
};

export const TicketQRCode = ({ id, variant }: TicketQRCodeProps) => {
  const { data: ticket, isLoading, isError } = useTicketQuery(id);

  const mediaQuery = useMediaQueries();

  let size;
  if (variant === "small") {
    size = 200;
  } else if (variant === "large") {
    size = 340;
  }

  if (mediaQuery === DESKTOP_SMALL) {
    size = 150;
  }

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
