import { useTicketQuery } from "../../queries/useTicketQuery";
import { QRCodeSVG } from "qrcode.react";

type TicketQRCodeProps = {
  id: number;
};

export const TicketQRCode = ({ id }: TicketQRCodeProps) => {
  const { data: ticket } = useTicketQuery(id);

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

  return <QRCodeSVG value={ticketData} size={200} />;
};
