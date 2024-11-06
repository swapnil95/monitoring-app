import React from "react";

type TTablePlaceholderProps = {
  repeat: number;
  columns: number;
};

export const TablePlaceholder: React.FC<TTablePlaceholderProps> = ({ columns, repeat }) => (
  <>
    {Array.from({ length: repeat }).map((_, index) => (
      <tr key={index} className="animate-pulse">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <td key={`placeholder-${colIndex}`} className="px-2">
            <span className="inline-block min-h-[1em] w-full flex-auto cursor-wait bg-current align-middle opacity-50" />
          </td>
        ))}
      </tr>
    ))}
  </>
);