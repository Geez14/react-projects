import java.util.Arrays;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
  public static void main(String[] args) {
    Pattern p = Pattern.compile("[^abc]");
    Matcher m = p.matcher("a3b#k@9z");
    // while (m.find()) {
    // System.out.println(m.start() + "..." + m.group());
    // }
    // m = p.matcher("a1b#k@9z");
    while (m.find()) {
      System.out.println(m.start() + "..." + m.group());
    }
  }
}
