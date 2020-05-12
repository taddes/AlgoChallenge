def memoize(fn):
    """storage of arguments and respective result"""
    cache = {}
    def cacheing(*args):
        if cache[args]:
            return cache[args]
    return cacheing


def slowFib(n):
    if (n < 2):
        return n
    else:
        return slowFib(n - 2) + slowFib(n - 1)
