interface ListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  keyExtractor: (item: T) => string | number
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={keyExtractor(item)}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  )
}

// Usage:
interface User {
  id: number
  name: string
  email: string
}

const users: User[] = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Jane", email: "jane@example.com" },
]

function App() {
  return (
    <List
      items={users}  // Step 1: You pass your data
      keyExtractor={(user) => user.id}  // Step 2: Tell how to get IDs
      renderItem={(user) => (  // Step 3: Tell how to display
        <div>
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </div>
      )}
    />
  )
}

//This creates a reusable list component that can
// work with any type of data. Instead of creating 
// separate lists for users, products, comments, etc.,
//  you create one flexible list that works with everything!

// This is like saying: "I'll work with any type, call it 'T'"
function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  // ...
}

