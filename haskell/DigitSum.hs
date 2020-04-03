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

-- no 20
factorialAnswer :: Int
factorialAnswer = sumDigits (factorial 100)

countDigits :: Integer -> Int
countDigits n = length (show n)

phi = (1 + sqrt 5) / 2
smallestFibWithLengthD :: Int -> Int
smallestFibWithLengthD d =
    ceiling ((fromIntegral d - 1) / logBase 10 phi + logBase phi 5 / 2)
