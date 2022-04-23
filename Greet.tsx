type GreetProps = {
    name: string
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name} to the World of React.tsx</h2>
        </div>
    )
}