module ProgSquares where
import           System.Environment

expr r x = r ^ 2 * x ^ 3 + r

isprime n = length (filter (\x -> n `rem` x == 0) [2 .. n - 1]) == 0

factorstwice n =
    [ k | k <- [2 .. n], n `rem` k == 0 && n `rem` (k * k) == 0 && isprime k ]
