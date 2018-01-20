describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  // this is the start of our own Tests
  it('should properly add a "parent" property to each child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('it should return the disassociated node', function() {
    tree.addChild(5);
    tree.children[0].addChild(4);
    tree.children[0].addChild(3);
    tree.children[0].children[0].addChild(2);
    tree.children[0].children[0].addChild(1);
    var node4 = tree.children[0].children[0];
    expect(node4.removeFromParent()).to.equal(node4);
  });

  it('the disassociated node should have a parent value of null', function() {
    tree.addChild(5);
    tree.children[0].addChild(4);
    tree.children[0].addChild(3);
    tree.children[0].children[0].addChild(2);
    tree.children[0].children[0].addChild(1);
    var node4 = tree.children[0].children[0];
    node4.removeFromParent();
    expect(node4.parent).to.equal(null);
  });

  it('check that the node was removed from the parent\'s children array', function() {
    tree.addChild(5);
    tree.children[0].addChild(4);
    tree.children[0].addChild(3);
    tree.children[0].children[0].addChild(2);
    tree.children[0].children[0].addChild(1);
    var node4 = tree.children[0].children[0];
    node4.removeFromParent();
    expect(tree.children[0].contains(4)).to.equal(false);
  });

  it('should traverse and apply callback properly', function() {
    var double = function(node) {
      node.value = node.value * 2;
    };

    tree.addChild(5);
    tree.children[0].addChild(4);
    tree.children[0].addChild(3);
    tree.children[0].children[0].addChild(2);
    tree.children[0].children[0].addChild(1);
    tree.traverse(double);

    expect(tree.children[0].value).to.equal(10);
    expect(tree.children[0].children[0].value).to.equal(8);
    expect(tree.children[0].children[1].value).to.equal(6);
    expect(tree.children[0].children[0].children[0].value).to.equal(4);
    expect(tree.children[0].children[0].children[1].value).to.equal(2);
  });

});
