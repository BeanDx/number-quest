import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';



function App() {
  return (
    <div className='flex items-center flex-col'>
      <h1 className="mt-10">
        NumberQuest
      </h1>
      <span className="text-xs">
        Game Guess the Number: Enter into a human-computer duel <br />
      </span>
      <Link to="/play">
        <button className='mt-5'>
          <FaPlay />
        </button>
      </Link>
    </div>
  )
}

export default App
