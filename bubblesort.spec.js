describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('can sort from smallest to largest', function(){
    expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
  });
});