interface Data<T> {
  items: T[]
  key: keyof T
  header: string
}

function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {/* Step 1: Render headers */}
          {columns.map((col) => (
            <th key={col.key as string}>
              {col.header}  // Shows: "ID", "Full Name", "Email Address"
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Step 2: Loop through data */}
        {data.map((item) => (
          <tr>
            {/* Step 3: For each item, show each column */}
            {columns.map((col) => (
              <td>
                {/* Use the column's key to get the value */}
                {item[col.key]}  // Gets: item.id, item.name, item.email
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}