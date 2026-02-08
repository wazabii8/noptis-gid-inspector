
type Segment = {
  key: string;
  label: string;
  value: string;
  inpValue: string;
  isValid: boolean;
  isPadding: boolean;
};

function Table({ segments }: { segments: Segment[] }) {
  return (
    <table>
      <tbody>
      {segments.map((segment, index) => (
        <tr key={index}>
          <th>{segment.label}</th>
          <td className={segment.isValid ? "valid" : "error"} title={(segment.isValid) ? segment.value : segment.inpValue + "->" + segment.value}>{segment.inpValue}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default Table;
