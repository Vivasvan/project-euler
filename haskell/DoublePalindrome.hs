module DoublePalindrome where
import           Prelude

isPalindrome :: String -> Bool
isPalindrome s = reverse s == s

repBinario :: Integer -> Integer
repBinario 0 = 0
repBinario x = 10 * repBinario (x `div` 2) + x `mod` 2

isDoublePalindrome :: Integer -> Bool
isDoublePalindrome x =
    isPalindrome (show x) && (isPalindrome (show (repBinario x)))

answer = sum (filter isDoublePalindrome [1 .. 1000000])
