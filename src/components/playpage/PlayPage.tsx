import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const PlayPage = () => {
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const [inputValueAsString, setInputValue] = useState<string>('');
    const [isGuessCorrect, setIsGuessCorrect] = useState<boolean | null>(null);
    const [hintMessage, setHintMessage] = useState<string | null>(null);

    useEffect(() => {
        setRandomNumber(generateNumber())
    }, []);

    function generateNumber(): number {
        const min = 10000;
        const max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const inputValueAsNumber = parseInt(inputValueAsString, 10);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setInputValue(value);

        checkNumber(value);

        hintButton();
    }

    function checkNumber(value: string): void {
        const num = parseInt(value, 10);

        if (!isNaN(num) && num === randomNumber) {
            setIsGuessCorrect(true);
        } else {
            setIsGuessCorrect(false);
        }
    }

    function hintButton(): void {
        if (randomNumber !== null) {
            if (!isNaN(inputValueAsNumber) && inputValueAsNumber > randomNumber) {
                setHintMessage("The hidden number is less.");
            } else if (!isNaN(inputValueAsNumber) && inputValueAsNumber < randomNumber) {
                setHintMessage("The hidden number is greater.");
            } else if (!isNaN(inputValueAsNumber) && inputValueAsNumber === randomNumber) {
                setHintMessage("Cool, you guessed it right :D");
            }
        }
    }

    function giveUpButton(): void {
        // if (isGuessCorrect === true) 
        isGuessCorrect === true ? alert('Well, another number...') : alert(`The number was guessed: ${randomNumber}`)
        setRandomNumber(generateNumber());
    }

    return (
        <div className="flex flex-col items-start justify-start">
            <h1 className="mt-10">
                NumberQuest
            </h1>
            <span className="text-xs">
                The computer guessed a number! Guess it using the "hint" button. <br />
                <span className="opacity-55">P.S: Mostly numbers are 5 digits :))</span>
            </span>

            <div className="flex flex-col items-start mt-2">
                <span>
                    Status: {isGuessCorrect !== null && (
                        <>
                            {isGuessCorrect ? (
                                <>
                                    Well yes, you guessed it :3
                                </>
                            ) : (
                                "Nope, try again!"
                            )}
                        </>
                    )}
                </span>

                <span>
                    Hint: {isGuessCorrect ? '' : hintMessage}
                </span>
            </div>

            <input
                value={inputValueAsString}
                onChange={handleInputChange}
                className="mt-5 @apply block py-1.5 px-3 mb-3 w-full border border-transparent bg-black/30 placeholder:text-white/60 focus:outline-none"
                type="number"
                placeholder='Enter Ur Number...'
            />

            <div className="flex w-full justify-center">
                <button className="ml-3" onClick={giveUpButton}>
                    <FaTimes />
                </button>
            </div>
        </div>
    )
}

export default PlayPage;
