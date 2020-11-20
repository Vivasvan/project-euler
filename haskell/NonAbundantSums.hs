module NonAbundantSums where
import qualified Data.HashSet                  as HashSet
import           Prelude

allNums :: [Int]
allNums = [1 .. 28123]

factors :: Int -> [Int]
factors n = [ x | x <- [2 .. n - 1], n `rem` x == 0 ]

isAbundant :: Int -> Bool
isAbundant n = (sum . factors) n > n

nums :: [Int]
nums = filter isAbundant allNums


sums :: [Int]
sums = [ z + y | z <- nums, y <- nums, z + y <= 28123 ]

sumSet :: HashSet.HashSet Int
sumSet = HashSet.fromList sums

notInSums :: Int -> Bool
notInSums = not . (`HashSet.member` sumSet)

expressible :: [Int]
expressible = filter notInSums allNums
result :: Int
result = sum $ expressible

