

listWithDuplicatedItems = [1,2,3, 5, 2, 8]

def duplicatedFinder():
    for index, item in enumerate(listWithDuplicatedItems):
        for anotherIndex, anotherItem in enumerate(range(item)):
            print(anotherItem)

duplicatedFinder()

