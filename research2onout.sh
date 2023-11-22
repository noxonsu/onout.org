echo "Enter a keyword to search for: "
read keyword

# Split keyword by space and get the first and second words
first_word=$(echo $keyword | cut -d ' ' -f 1)
second_word=$(echo $keyword | cut -d ' ' -f 2)


# Create a directory with the name of the first word of the keyword and navigate into it
if [ ! -d "${first_word}" ]; then
    mkdir "${first_word}"
fi

cd "${first_word}"
# Use wget to download the file and save it with a specific name
wget "https://raw.githubusercontent.com/noxonsu/researcher/main/data/${keyword}/article.html" -O "${second_word}.html"
