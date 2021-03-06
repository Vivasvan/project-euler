module ReciprocalCycles where
import           Prelude
import           Data.List

-- intPart :: (RealFrac a) => a -> Integer
-- intPart a = floor (a)


getNextDigit :: Double -> String
getNextDigit x = show $ floor (10 * x)

getDecimalSeq :: Double -> String
getDecimalSeq x = getDigits x 1000

isCycleLength n s = do
    let x = take n s
    let y = take n $ drop n s
    x == y

shead :: (Num a) => [a] -> a
shead [] = 0
shead xs = head xs

cycleLength s = shead [ x | x <- [1 .. 1000], isCycleLength x s ]

recipCycleLength = cycleLength . getDecimalSeq . recip

maxCycleLength = max' $ map recipCycleLength [1 .. 1000]

max' :: Ord a => [a] -> a
max' [e     ] = e
max' (a : as) = max a $ (max' as)

answer = findIndex (== maxCycleLength) (map recipCycleLength [1 .. 1000])
