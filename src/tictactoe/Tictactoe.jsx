import SquareBoard from './SquareBoard';
import Player from './Player';
import BoardHistory from './BoardHistory';
import './Tictactoe.css'

function Tictactoe() {
    return (
        <>
        <SquareBoard />
        <Player />
        <BoardHistory />
        </>
    )
}

export default Tictactoe;