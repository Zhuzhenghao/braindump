#include <stdio.h>

int is_prime(int number) {
    if (number <= 1) {
        return 0;
    }
    if (number <= 3) {
        return 1;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return 0;
    }
    for (int i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return 0;
        }
    }
    return 1;
}

int find_nth_prime(int n) {
    if (n <= 0) {
        return -1; // Invalid input
    }
    int count = 0;
    int number = 2;
    while (count < n) {
        if (is_prime(number)) {
            count++;
            if (count == n) {
                return number;
            }
        }
        number++;
    }
    return -1; // Shouldn't reach here
}

int main() {
    int n = 100; // Change this to find a different prime number (e.g., the 10th prime)
    int result = find_nth_prime(n);

    if (result != -1) {
        printf("The %d-th prime number is: %d\n", n, result);
    } else {
        printf("Invalid input or an error occurred.\n");
    }

    return 0;
}