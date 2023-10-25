import java.util.Stack;

class Solution {
    public String simplifyPath(String path) {

        Stack<String> pathStack = new Stack<>();

        String[] pathLevels = path.split("/");

        for (int i = 0; i < pathLevels.length; i++) {
            if (pathLevels[i].equals("..") && !pathStack.isEmpty()) {
                pathStack.pop();
            } else if (!pathLevels[i].equals("..") && !pathLevels[i].equals(".") && !pathLevels[i].equals("")) {
                pathStack.push(pathLevels[i]);
            }
        }

        return "/" + String.join("/", pathStack);
    }
}