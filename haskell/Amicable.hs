module Amicable where
import           Prelude

factors n = [ x | x <- [1 .. n - 1], n `rem` x == 0 ]

sumFactors = sum . factors

isAmicable :: Int -> Bool
isAmicable n = do
    let p = sumFactors n
    (p /= n) && sumFactors p == n

total = sum (filter isAmicable [1 .. 10000])
