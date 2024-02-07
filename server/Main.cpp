#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    int n = nums.size();
    int temp[n];
    vector<int> ans;

    // Copy the original array for later index retrieval
    for (int i = 0; i < n; i++) {
        temp[i] = nums[i];
    }

    // Sort the array for two-pointer approach
    sort(nums.begin(), nums.end());

    // Initialize two pointers
    int l = 0, r = n - 1;

    // Two-pointer approach
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum == target) {
            // Indices are stored in the 'ans' vector
            for (int i = 0; i < n; i++) {
                if (nums[l] == temp[i] || nums[r] == temp[i]) {
                    ans.push_back(i);
                }
            }
            break;
        } else if (sum > target) {
            r--;
        } else {
            l++;
        }
    }

    return ans;
}

int main() {
    int n;
    cin >> n;

    vector<int> v;
    int a;

    // Input array elements
    for (int i = 0; i < n-1; i++) {
        cin >> a;
        v.push_back(a);
    }

    int t;
    cin >> t;

    vector<int> result = twoSum(v, t);
    if (result.size() == 2) {
        cout <<result[0] << result[1];
    } else {
        cout << "No solution found." << endl;
    }
    return 0;
}