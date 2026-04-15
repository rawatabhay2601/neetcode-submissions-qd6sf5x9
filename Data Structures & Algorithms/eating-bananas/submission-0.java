class Solution {
    public int minEatingSpeed(int[] piles, int h) {

        int min = 1;
        int max = this.max(piles);
        int mid = 0;
        int result = 0;

        while (min <= max) {
            mid = min + (max - min)/2;

            if(canFinish(mid, piles, h)) {
                result = mid;
                max = mid-1;
            } else {
                min = mid+1;
            }
        }

        return result;
    }

    public int max(int[] piles) {
        int result = 0;

        for(int pile : piles) {
            if(result < pile) result = pile;
        }

        return result;
    }

    public boolean canFinish(int speed, int[] piles, int hoursGiven) {

        long hoursNeeded = 0;

        for(int pile : piles) {
            hoursNeeded += (pile + speed - 1)/speed;

            if(hoursNeeded > hoursGiven) {
                return false;
            }
        };

        return hoursNeeded <= hoursGiven;
    }
}