import { VOID_COLORS } from "../../design/colors";

const StackItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-2">
    <h3
      className="text-sm tracking-widest"
      style={{ color: VOID_COLORS.WHITE }}
    >
      {title}
    </h3>
    <div className="text-sm leading-relaxed opacity-90">{children}</div>
  </div>
);

export default StackItem;