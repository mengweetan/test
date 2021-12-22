from __future__ import division

def sum_to_n_a(n):
    sum = 0
    for i in range(n+1):
        sum += i
    return int(sum)


def sum_to_n_b(n):
    if n%2==0:
        return int((n+1)*(n/2))
    else:
        return int(((n+1)*(n//2))+(n/2+0.5))

def sum_to_n_c(n):
    return int(n*(n+1)/2)
