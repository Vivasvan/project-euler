module NumberLetterCounts where
import           Prelude


-- name n | length (atomName n) > 0 == atomName  n

hundredsPart n = n `div` 100
hundreds n | n `mod` 100 == 0 = atomName (hundredsPart n) ++ " hundred"
           | n > 100          = atomName (hundredsPart n) ++ " hundred and "
           | otherwise        = ""

tensPart :: Int -> Int
tensPart n = (n `mod` 100) `div` 10
tens n | n `mod` 100 > 9 && n `mod` 100 <= 20 = atomName (n `mod` 100) ++ " "
       | n <= 9 = ""
       | otherwise = atomName (10 * tensPart n) ++ " "

units n | (n `mod` 100 > 19 || n `mod` 100 < 10) = atomName (n `mod` 10)
        | otherwise                              = ""

name n | n == 1000 = atomName n
       | otherwise = hundreds n ++ tens n ++ units n

allNamesLengthTest = length (concat (map name [1 .. 5]))
allNamesLength =
    length ((filter (\x -> x /= ' ')) (concat (map name [1 .. 1000])))

atomName :: Int -> String
atomName 1    = "one"
atomName 2    = "two"
atomName 3    = "three"
atomName 4    = "four"
atomName 5    = "five"
atomName 6    = "six"
atomName 7    = "seven"
atomName 8    = "eight"
atomName 9    = "nine"
atomName 10   = "ten"
atomName 11   = "eleven"
atomName 12   = "twelve"
atomName 13   = "thirteen"
atomName 14   = "fourteen"
atomName 15   = "fifteen"
atomName 16   = "sixteen"
atomName 17   = "seventeen"
atomName 18   = "eighteen"
atomName 19   = "nineteen"
atomName 20   = "twenty"
atomName 30   = "thirty"
atomName 40   = "forty"
atomName 50   = "fifty"
atomName 60   = "sixty"
atomName 70   = "seventy"
atomName 80   = "eighty"
atomName 90   = "ninety"
atomName 100  = "hundred"
atomName 1000 = "one thousand"
atomName _    = ""
