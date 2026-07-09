interface Props {
  name: string
  age: number
}

export function UseCard({name, age}: Props) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}

//Arrow function with inferred return
export const UseCards = ({name, age}: Props) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>Age: {age}</h2>
    </div>
  )
}

//Arrow function with explicit type
export const UserCard: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  )
}

//component return type
function Component(): JSX.Element {
  return <div>Hello</div>
}

function Wrapper({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="wrapper">{children}</div>
}

function ConditionalComponent({ show }: { show: boolean }): JSX.Element | null {
  if (!show) return null
  return <div>Content</div>
}