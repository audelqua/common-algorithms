

listWithDuplicatedItems = [1,2,3,5,2,1,8,2,4,3,1]

# duplicated finder with n^2 O notation algorithm 
dupElements = []
def duplicatorFinderBadWay():
    for i in range(len(listWithDuplicatedItems)): # for every element in our comparision 
        for j in range(i):  # for all left elements of our target elements of comparision
            if listWithDuplicatedItems[i] == listWithDuplicatedItems[j]: #if element is duplicated
                if listWithDuplicatedItems[i] not in dupElements: # if duplicated element is not in our target list
                    dupElements.append(listWithDuplicatedItems[i]) # creating duplicated elements

            
duplicatorFinderBadWay()
print(dupElements)

# duplicated finder with n^1 O notation algorithm 
singleElements = []
duplicatedsElements = []
def duplicatorFinder():
    for index, item in enumerate(listWithDuplicatedItems):
        if item not in singleElements: 
            singleElements.append(item)
        else:
            if item not in duplicatedsElements:
                duplicatedsElements.append(item)
duplicatorFinder()

print(duplicatedsElements)