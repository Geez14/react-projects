import java.util.LinkedList;


public class MerkelTree {
  Node root;
  // each node stores the hash of the hashes of next node!
  static class Node {
    String hash;
    LinkedList nextNodes;
  }
}

class Test {
  public static void main(String...args) {
    MerkelTree m = new MerkelTree();
  }
}
