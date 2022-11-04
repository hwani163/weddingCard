
    # Load Environment Variables
    #export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
    # For instance, will be example_kaggle_key
    #echo $INSTA_ID
    #echo $INSTA_PASSWORD
    npm install 
    npm run build 
    rm -rf public/insta/*.*
    python3 downloadPhoto.py
    rm -rf public/insta/*.txt
    pm2 reload ecosystem.config.js


