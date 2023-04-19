public class ValidPalindrome {

    public static void main(String[] args) {

    String str = "0P";

    boolean palindrome = isPalindrome(str);
    System.out.println(palindrome);

    }

    public static boolean isPalindrome(String str) {
        String cleanStr = str.toLowerCase().replaceAll("[^a-z0-9]+", "");
        if (cleanStr.length() == 1) {
            return true;
        }

        StringBuilder reversedString = new StringBuilder();

        for (int i = cleanStr.length() - 1; i >= 0; i--) {
            reversedString.append(cleanStr.charAt(i));
        }

        return cleanStr.equals(reversedString.toString());

    }
}