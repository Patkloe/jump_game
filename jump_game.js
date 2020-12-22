let i = 0, maxIndexReachable = 0;
    
        while(i <= maxIndexReachable){
            
            maxIndexReachable = Math.max(maxIndexReachable, i + nums[i]);
            
            i++;
            
            if(maxIndexReachable>=nums.length-1)
                return true;
        }
    return false;
