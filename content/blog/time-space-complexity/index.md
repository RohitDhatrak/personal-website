---
title: Time and Space Complexity
date: "2020-11-05T22:12:03.284Z"
description: "Time Complexity is used to determine if our algorithm will be able to run in the required amount of time. We don't measure the time in seconds as it depends on various factors like..."
---

#####What is time complexity?
Time Complexity is used to determine if our algorithm will be able to run in the required amount of time. We don't measure the time in seconds as it depends on various factors which we don't want to take into consideration. We are interested in the behaviour of an algorithm for a large number of inputs.

#####How do we measure time complexity?
When we want to measure the time complexity we can do so in three ways. We can measure the worst possible time an algorithm takes, the best possible time it takes and the average time it takes.

Big-O notation represents the worst possible time an algorithm takes and it's written as O().\
Ω-notation gives the best possible time an algorithm takes and it's written as Ω().\
Θ-notation gives the average time taken by an algorithm and it's written as Θ().

These three are known as the asymptotic notations. Out of these notations, we'll be using the Big-O notion as we are interested in the worst-case scenario.

#####How To Calculate Big O

i\) Break your algorithm into individual operations.\
ii\) Calculate the no of times each operation repeats.\
iii\) Add everything together.\
iv\) Remove the constants multiples.\
v\) Drop the lowere order terms.

We get rid of all the constant multiples and the lower order terms because they don't contribute much for large values of input. We'll see the steps in the examples below.

#####What are the different time complexities?

######1. Constant time

```
int average(int a, int b) {
    int avg = (a+b)/2;      // occurs once
    return avg;             // occurs once
}
```

After adding all the values we get :\
1 + 1 = 2

In this function, each step occurs once so after adding all the steps we get 2. Which can be written as O(1) because we'll drop all the constant multiples.

Therefore as the input increases, the time taken by the algorithm stays the same.

######2. Linear time

```
int find(int arr[], int key) {
    int n = sizeof(arr);         // 1
    for(int i = 0; i < n; i++) { // n
        if(arr[i] == key)        // 1
            return i;            // 1
    }
    return -1;                   // 1
}
```

After adding all the values we get :\
1 + n \* (1 + 1)+1\
= 2 + 2n

We multiply the values in the for loop i.e (1 + 1) with no of times the loop occurs i.e n. Because the steps inside the for loop will repeat for n number of times.

By dropping the lower order term 2, we get 2n. Then we will drop the constant multiple 2. So the time complexity is given by O(n).

Therefore as input increases, the time taken by the algorithm increases linearly.

######3. Quadratic time

```
int findDuplicates(int array[]) {
    int n = sizeof(array);                        // 1
    for (int i = 0; i < n; i++){                  // n
        for (int j = 0; j < n; j++){              // n
            if (i !==j && array[i] == array[j]){  // 1
                return i;                         // 1
            }
        }
    }
    return -1;                                    // 1
}
```

After adding all the values we get :\
1 + n \* (n \* (1 + 1 ) ) + 1\
= 2 + 2n<sup>2</sup>

By dropping the lower order term and the constant multiple we get O(n<sup>2</sup>).

Therefore as input increases, the time taken by the algorithm increases in a quadratic fashion.

######4. Logarithmic time

Log is written as log<sub> x</sub> y

log<sub> 2</sub> 8 = 3\
You can think of it as how many 2's do we multiply together to get 8. The answer is 3.

We take log to the base two and not ten because a computer operates in binary number system as opposed to the decimal number system that we use.

Now we'll take a look at binary search. The way this algorithm operates is similar to how we might search for a word in a dictionary. Let's say we open the dictionary somewhere in the middle. If the word we are looking for lies in the left half we ignore the right half and then again split the left half in two.

If we keep on doing this process we'll eventually find the word we are looking for because the words in a dictionary are arranged in alphabetical order. Similarly, if we have an sorted array and we want to look for a value x we can apply binary search.

```
int binarySearch(int arr[], int x) {

    int l = 0;
    int h = sizeof(arr)-1;

    while (r >= l) {
        int mid = l + (r - l) / 2;

        // If the element is present at the
            // middle itself
            if (arr[mid] == x)
            return mid;

            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
        h = mid - 1;

            // Else the element can only be present
            // in right subarray
    	if (arr[mid]<)x
    		l = mid + 1;
    }

    // We reach here when element is not present
    // in array
    return -1;
}
```

In this algorithm, the amount of data to work on can be reduced by half with each iteration.

<math><mfrac><mi>n</mi><mi>2</mi></mfrac></math>, <math><mfrac><mi>n</mi><mi>4</mi></mfrac></math>, <math><mfrac><mi>n</mi><mi>8</mi></mfrac></math> ...

Therefore in the worst case, we'll find the element in the last iteration i.e we kept on dividing until only one element was left.

This can be mathematically represented by <math><mfrac><mi>n</mi><mi>n</mi></mfrac></math> = 1. The denominator can be represented by a power of 2 as we divided by 2 with every iteration.

Therefore we can write it as <math><mfrac><mi>n</mi><mi>2<sup>k</sup></mi></mfrac></math> = 1 where k is the number of times we divided by 2.\
∴ n = 2<sup>k</sup>

Because k is the number of times we divided by 2, k will give us the number of iterations it took to get the number in the worst possible case.\
The equation n = 2<sup>k</sup> can be written as k = log<sub>2</sub>(n). Therefore the time complexity is O(log n).

Therefore as input increases, the time taken by the algorithm increases logarithmically.

Therefore the Time Complexity of a loop is considered as O(logn) if the loop variables is divided / multiplied by a constant amount.

```
for (int i = 1; i <=n; i *= c) {
    // some O(1) expressions
}
for (int i = n; i > 0; i /= c) {
    // some O(1) expressions
}
```

![Time Complexity Plots](./time-complexity.png)

Here we can see the different time complexities we discussed above and how they compare to each other. O(1) is the fastest and O(n<sup>2</sup>) is the slowest.

There are other time complexities as well like O(nlog n), O(c<sup>n</sup>), O(n!) which we'll cover in the future posts.

An interesting thing to note is that O(log n) is slower than O(n) for smaller values. Similarly O(n<sup>2</sup>) is faster than O(n) for smaller values of n. But we don't really care about small values we check for the behaviour of the algorithm when the input is large.

#####What is Space Complexity?
It is the same as time complexity but instead of looking at how much more time our algorithm takes as the input increases. Then we look at how much more space does our algorithm consumes when the input grows.

We often optimize for time over space because usually space is not an issue but we want our algorithms to be faster.

If you liked the post or have any questions/suggestions feel free to reach out on any of the social media platforms.
