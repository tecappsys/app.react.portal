#echo ..............................uninstallin nodejs...
#echo ..............................remove nodejs...
#sudo apt-get remove nodejs -y
#echo ..............................purge nodejs...
#sudo apt-get purge nodejs -y
#echo ..............................autoremove nodejs...
#sudo apt-get autoremove -y

# echo ..............................update dependencies...
# sudo apt update -y

# echo ..............................installin curl...
# sudo apt-get install -y curl

# echo ..............................installin nvm...
# curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 


# NODE JS

# Define the expected Node.js version
# expected_version="14.17.0"
# install_node(){
#     echo ..............................installin Node whit NVM...
#     export NVM_DIR=$HOME/.nvm;
#     source $NVM_DIR/nvm.sh;
#     source ~/.bashrc
#     nvm install node -y
#     nvm install 16.20.2
#     nvm use 16.20.2
#     echo ..............................Version nodejs...
#     node -v
#     echo ..............................Version npm...
#     npm -v  
# }

# Check if Node.js is not installed or version differs
# if ! command -v node &> /dev/null; then
#     install_node
# else
#     # Get the installed Node.js version
#     installed_version=$(node -v | cut -c 2-)  # Remove the 'v' from the version

#     # Compare the installed version with the expected version
#     if [ "$installed_version" != "$expected_version" ]; then
#         install_node
#     fi
# fi

