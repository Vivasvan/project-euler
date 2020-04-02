module DigitSum where
import           Prelude

readChar :: Char -> Int
readChar s = read [s]

sumDigits :: Integer -> Int
sumDigits n = sum (map readChar (show n))

answer :: Int
answer = sumDigits (2 ^ 1000)
-- fails for big numbers, poss due to Int type being too small

factorial :: Integer -> Integer
factorial 0 = 1
factorial n = n * factorial (n - 1)

factorialAnswer :: Int
factorialAnswer = sumDigits (factorial 100)



