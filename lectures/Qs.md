----------------------------------------------------------------
Question 1:
Row major and column major representation.

         j
  |0|1|0|0| -> 1
i |2|  |  |  |  -> ...
  |  |  |  |  |  -> ...

Memory: a sequence of location
Row major
i₁   |0|1|  |  |  i₂   |2|  |  |  | i₃   |  |  |  |  |

Row sum:

for (int i = 0; i < d0; i++)
  for (int j = 0; j < d1; j++)
      output[i] += A[i][j]

Column major
j₁   |0| 2 |  |  j₂   |1|  |  |  j₃  |  |  |  | j₄  |  |  |  |

a) Update the loop for column major.

for (int j = 0; j < d1; j++)
  for (int i = 0; i < d0; i++)
      output[i] += A[i][j]

Caches

(b) Which loop is DO-All?

(c) Can we parallelize the nested loop?
Reduction
       T₁                  T₂                   T₃                   T₄
|0|1|0|0|  |0|1|0|0|   |0|1|0|0|  |0|1|0|0|
      ps[0]             ps[1]             ps[2]          ps[3]
      
Launch 4 threads.
Join 4 threads.
Sum them up. ps[0] + ps[1] + ps[2] + ps[3]

----------------------------------------------------------------
First do Question 3.
Question 2:

Implement a bank account that cannot be larger than a certain amount, and blocks for both deposit and withdraw until they can be done.

class Account {
private:
   atomic_int balance;
   int max_amount;

public:
   Account (int max_amount) {
      balance = 0;
      this.max_amount = max_amount;
   }

   void deposit(int a) {
      while (true) {
         int b = balance;
         if (b + a <= max_amount && balance.cas(b, b + a))
            return;
         else
            yield();
      }
   }

   void withdraw(int a) {
      while (true) {
         int b = balance;
         if (b - a >= 0 && balance.cas(b, b - a))
            return;
         else
            yield();
      }
   }
}

balance = 4
max = 10
a₁ = 5
a₂ = 6
balance = 15

void deposit (int a) {
                                                                                                void deposit (int a) {
   while (true) {
                                                                                                   while (true) {
      int b = balance;
                                                                                                      int b = balance;
      if (b + a <= max_amount && balance.cas(b, b + a))
                                                                                                      if (b + a <= max_amount && balance.cas(b, b + a)) // fails
         return;
                                                                                                         yield()

----------------------------------------------------------------
Question 3:

Simple account:

class Account {
private:
   int balance;
   int max_amount;

public:
   Account (int max_amount) {
      balance = 0;
      this.max_amount = max_amount;
   }

   void deposit (int a) {
      int b = balance;
      if (b + a <= max_amount)
         balance = b + a;
   }

   void withdraw (int a) {
      int b = balance;
      if (b - a >= 0)
         balance = b - a;
   }
}

Make it concurrent and blocking.
What is the problem with this concurrent implementation?

class Account {
private:
   atomic_int balance;
   int max_amount;

public:
   Account (int max_amount) {
      balance = 0;
      this.max_amount = max_amount;
   }

   void deposit (int a) {
      while (true) {
         int b = balance;
         if (b + a <= max_amount) {
            balance.fetch_and_increment(a);
            return;
         }
      }
   }

   void withdraw (int a) {
      while (true) {
         int b = balance;
         if (b - a >= 0) {
            balance.fetch_and_increment(-a);
            return;
         }
      }
   }
}


balance = 4
max = 10
a₁ = 5
a₂ = 6
balance = 15

void deposit (int a) {
                                                                              void deposit (int a) {
   while (true) {
                                                                                 while (true) {
      int b = balance;
                                                                                    int b = balance;
      if (b + a <= max_amount) {
                                                                                    if (b + a <= max_amount) {
         balance.fetch_and_increment(a);
                                                                                          balance.fetch_and_increment(a);
         return;
                                                                                          return;
      }
   }
}

----------------------------------------------------------------
Question 4:

Global variables:
int x[1] = {0};
int y[1] = {0};

Thread 0         Thread 1  
store(x,1)        store(y,1)
t0 = load(y)     t1 = load(x)

At the end of the execution can:
t0 == 0 and t1 == 0?

Which reorderings are needed and which are don't care so that this is possible?

—————————————–
store(x,1)
t0 = load(y)
                        store(y,1)
                        t1 = load(x)   ->  t1 = 1

—————————————–
                        t1 = load(x)   ->  t1 = 0
                        
store(x,1)
t0 = load(y)
                        store(y,1)
—————————————–

Load has to go above store.

                                                     i1
                            Load                                  Store
      Load  |    don't care            |  different address     |  
i2   Store |    don't care            |      don't care              | 

Can we get
t0 == 1 and t1 == 1?

SC gives us that.

Thread 0         Thread 1  
store(x,1)       
                        store(y,1)   
t0 = load(y)    
                        t1 = load(x)

Does putting a fence help here?

Thread 0         Thread 1  
store(x,1)       store(y,1)   
fence              fence
t0 = load(y)     t1 = load(x)


Thread 0         Thread 1  
store(x,1)       
                        store(y,1)   
fence              fence                        
t0 = load(y)    
                        t1 = load(x)

No.

----------------------------------------------------------------
Question 5:

What is the difference?
How many blocks? How many warps are used?

———————————-
__global__ void vector_add (int * d_a, int * d_b, int * d_c, int size) {
   int chunk_size = size/blockDim.x;
   int start = chunk_size * threadIdx.x;
   int end = start + chunk_size;
   for (int i = start; i < end; i++) {
      d_a[i] = d_b[i] + d_c[i];
   }
}
calling the function
vector_add<<<1,64>>>(d_a, d_b, d_c, size);

blockIdx.x is the block id.
blockDim.x is the number of threads per block.
threadIdx.x is the thread id within block.

———————————-
__global__ void vector_add (int * d_a, int * d_b, int * d_c, int size) {
   for (int i = threadIdx.x; i < size; i+=blockDim.x) {
      d_a[i] = d_b[i] + d_c[i];
   }
}
calling the function
vector_add<<<1,64>>>(d_a, d_b, d_c, size);

Stride is better.

———————————-
Cache size  = 4

__global__ void vector_add(int * d_a, int * d_b, int * d_c, int size) {
   d_a[threadIdx.x] = d_b[threadIdx.x] + d_c[threadIdx.x];
}

| line                | line               |
| 5 | 6 | 7 | 8 | 5 | 6 | 7 | 8|
  ^    ^    ^    ^
 |     |    |    |
  T₀   T₁   T₂   T₃    L/S

Warp = 32 threads
4 threads share the same load/store unit.
32 = 4 * 8

How many reads does a warp do?
8 * 1 = 8 reads

——————————————
| line                | line               |
| 5 | 6 | 7 | 8 | 5 | 6 | 7 | 8|
                            ^    ^    ^    ^
                            |     |    |    |
                           T₀   T₁   T₂   T₃    L/S


What if we shift them by 4? How many reads does a warp do?
d_a[threadIdx.x + 4]
8 * 1 = 8 reads

Every four threads do a single read.

——————————————
| line                | line               |
| 5 | 6 | 7 | 8 | 5 | 6 | 7 | 8|
               ^    ^    ^    ^
               |     |    |    |
               T₀   T₁   T₂   T₃    L/S

d_a[threadIdx.x + 2]
Two fall in one cache line and the other two fall in the second cache line.
So two reads for each 4 threads.
8 * 2 = 16 reads

----------------------------------------------------------------

