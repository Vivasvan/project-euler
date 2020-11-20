module CircularPrimes where
import           Prelude


factors n = [ x | x <- [ y | y <- [1 .. n], y ^ 2 < n ], n `rem` x == 0 ]

isPrime n = 1 == (length $ factors n)

primes = filter isPrime [1 .. 1000000]

isPrimeSmart p = p `elem` primes



digits :: Int -> [Int]
digits n | n < 10    = [n]
         | otherwise = n `rem` 10 : digits (n `div` 10)

makePermAt :: Int -> Int -> [Int] -> [Int]
makePermAt i n p = a ++ [n] ++ b where (a, b) = splitAt i p

makePerms :: Int -> [Int] -> [[Int]]
makePerms n p = map (\i -> makePermAt i n p) [0 .. length p]


perms :: [Int] -> [[Int]]
perms []       = [[]]
perms (n : []) = [[n]]
perms (n : ns) = do
    let oldPerms = perms ns
    let newPerms = concatMap (makePerms n) oldPerms
    newPerms

permToStr :: [Int] -> String
permToStr (n : ns) = show n ++ permToStr ns
permToStr []       = ""

permToNo :: [Int] -> Int
permToNo = read . permToStr

isCyclicPrime n = all (isPrimeSmart . permToNo) (perms $ digits n)

x = filter isCyclicPrime [1 .. 10000]

