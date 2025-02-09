import './App.css'
import Card from './components/Card'

function App() {
    const data = [
        {
        img: "https://images.pexels.com/photos/1938126/pexels-photo-1938126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Black dog",
        description: "This is a black dog."
        },
        {
        img: "https://images.pexels.com/photos/1189673/pexels-photo-1189673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Red dog",
        description: "This is a red dog."
        },
        {
            img: "https://images.pexels.com/photos/594687/pexels-photo-594687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "White dog",
            description: "This is a white dog."
            },
       ]

    return (
        <>
        <h3> Proj React Homework </h3>
        {data.map((item, index) => (
        <Card 
        key={index}
        image={item.img}
        title={item.title}
        description={item.description}
        />
    ))}
        </>
    )
}

export default App





