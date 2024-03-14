import markdown
import os
import datetime
from dotenv import load_dotenv

def generate_html_from_markdown(mark, title, PUBLICATION_TAGS, date_iso, author_name, author_link, about_author, CallToActionTitle, CallToActionButton, CallToActionNo,meta_description = ''):
    # markdown to html with tables
    # markdown extantions for \n to <br>
    # unescape \" to " and other \ in mark
    mark = mark.replace('\\"', '"')
    mark = mark.replace('\\n', '\n')
    mark = mark.replace('\\', '')
    
    html = markdown.markdown(mark, extensions=['markdown.extensions.tables', 'markdown.extensions.extra', 'markdown.extensions.nl2br', 'markdown.extensions.sane_lists'])
    #add class = 'pv3 pr3 bb b--black-20' to all td and th 
    html = html.replace('<td>', '<td class = "pv3 pr3 bb b--black-20">')
    html = html.replace('<th>', '<th class = "fw6 bb b--black-20 tl pb3 pr3 bg-white">')
    #li .mb1
    html = html.replace('<li>', '<li class = "mb1">')
    
    html = html.replace("- ", "<br>- ")
    jscript = """
    // Initialize tocbot
    tocbot.init({
        tocSelector: '.toc-content',
        contentSelector: '.content',
        headingSelector: 'h1, h2, h3',                    
        collapseDepth: 1,
        hasInnerContainers: true
    });
    function closePanel() {              
        var button = event.target;              
        var parent = button.closest('.sticky-panel');
        parent.style.display = 'none';
    }"""

    css = """
    
    
    .toc{overflow-y:auto}.toc>.toc-list{overflow:hidden;position:relative}.toc>.toc-list li{list-style:none}.js-toc{overflow-y:hidden}.toc-list{margin:0;padding-left:10px}a.toc-link{color:currentColor;height:100%}.is-collapsible{max-height:1000px;overflow:hidden;transition:all 300ms ease-in-out}.is-collapsed{max-height:0}.is-position-fixed{position:fixed !important;top:0}.toc-link::before{background-color:#eee;content:" ";display:inline-block;height:inherit;left:0;margin-top:-1px;position:absolute;width:2px}.is-active-link::before{background-color:#54bc4b}/*# sourceMappingURL=tocbot.css.map */

           
    /* Custom styles for layout */
    body{
        font-size: 1.1rem;
        color: #000;
    }
    .layout {
        display: flex;
        justify-content: center;            
    }
    .toc-content {            
        position: relative;
    }
    .sticky{
        position: sticky;
        top: 1rem;
    }
    .toc-list{            
        list-style: none;
        margin: 0;                                                                        
        overflow: hidden;
        position: relative;
    }

    .toc-list{
        line-height: 1.4;
    }

    .toc-list .toc-list{
        position: static;
    }

    .toc>.toc-list{                    
        position: static;
    }

    .toc>.toc-list li{
        list-style: none;                    
    }

    .sticky-panel{
        position: sticky;
        bottom: 0;
        background-color: #fff;
        margin-left: -1rem;
        margin-right: -1rem;
    }

    .is-active-link::before {
        background-color: #00449e;
    }

    .content {
        /*max-width: 100%; /* Adjust based on your content's optimal reading width */
        flex: 0 0 75%;
        max-width: 75%;
    }

    aside{
        flex: 0 0 25%;
        max-width: 25%;
    }

    .content{
        flex: 1;
    }

    aside + .content{
        padding-left: 2rem;
    }

    @media screen and (max-width: 50em){
        .sticky-panel .layout{
            display: block;
        }
    }

    @media screen and (max-width: 30em) {
        aside{
            display: none;
        }
        .content {                
            width: 100%;
            margin-left: 0;
        }
        .layout{
            padding-left: 0;
            padding-right: 0;
        }
        .content {        
            flex: 0 0 100%;
            max-width: 100%;
        }
        aside + .content{
            padding-left: 0;
        }
    }
     
    """
    if (CallToActionTitle != ''):
        cta = """
        display: block;
        """
    else:
        cta = """
        display: none;
        """
    template = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:type" content="article" />
        <meta name="keywords" content="{PUBLICATION_TAGS}">
        <meta name="description" content="{title}">
        <title>{title}</title>
       
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tachyons/css/tachyons.min.css">
        <style>
           {css}
        </style>
    </head>
    <body class="w-100 sans-serif pa3 pb0">
        <header class="tc pv2 pv4-l">
            <h1 class="f2 lh-title mt0 mb4">{title}</h1>
            <time class="f6 ttu tracked db mb4" datetime="{date_iso}">{date_iso}</time>
            <address class="f6">
                <a href="{author_link}" class="link dim black b">{author_name}</a>
                {about_author}
            </address>
        </header>

        <div class="layout mw8 center pa0">
            <aside class="aside">
                <div class="sticky">                          
                    <nav class="toc-content mb3">
                        <!-- tocbot will inject TOC here -->                
                    </nav>
                    <!-- <a href="#"><img src="https://placehold.co/200x200" alt=""></a> -->
                </div>      
            </aside>
                                    
            <!-- Main Content -->
            <div class="content">
                <article class="mb4">
                    {html}
                </article>
                <!-- Additional articles or content here -->
            </div>
        
        </div>

        <div style='{cta}' class="sticky-panel shadow-2 pa2">
            <div class="layout mw8 center pa0">
                <div class="w-100 w-100-ns w-100-m flex items-center">
                    <div class="f6 f5-m f4-l lh-copy mb2 mb0-l">{CallToActionTitle}</div>
                </div>
                <div class="w-100 w-100-ns w-100-m w-25-l">
                    <a class="f6 link dim br2 ph3 pv2 dib white bg-dark-blue" href="#0">{CallToActionButton}</a>
                    <a class="f6 link dim br2 ph3 pv2 dib black" onclick="closePanel()" href="#0">{CallToActionNo}</a>
                </div>
            </div>
        </div>

        <!-- Include tocbot script -->
        <script src="https://cdn.jsdelivr.net/npm/tocbot/dist/tocbot.min.js"></script>
        <script>
          {jscript}
        </script>
    </body>
    </html>"""

    return template


def save_html_to_file(html, file_path):
    with open(file_path, "w") as f:
        f.write(html)

def main():
    # load from .env file from current folder
    
    #os.environ specify .env file path
    load_dotenv()

    html_title = os.environ.get('PUBLICATION_TITLE')
    print(html_title)
    PUBLICATION_TAGS = os.environ.get('PUBLICATION_TAGS')
    markdown_content = os.environ.get('PUBLICATION_TEXT')

    author_link = os.environ.get('AUTHOR_LINK','#')
    author_name = os.environ.get('AUTHOR_NAME','Anonymous')
    about_author = os.environ.get('ABOUT_AUTHOR','Autor not specified')
    
    INDUSTRY_KEYWORD = os.environ.get('INDUSTRY_KEYWORD')

    CallToActionTitle = os.environ.get('CallToActionTitle','')
    CallToActionButton = os.environ.get('CallToActionButton')
    CallToActionNo = os.environ.get('CallToActionButtonNo','No Thanks')

    date_iso = datetime.datetime.now().isoformat()
    date = datetime.datetime.now().strftime("%Y-%m-%d")

    #if no markdown_content read file f"data/{INDUSTRY_KEYWORD}/article.md"
    if (markdown_content == '' or markdown_content == None):
        with open(f"readme.md", "r") as f:
            markdown_content = f.read()

    html = generate_html_from_markdown(
        markdown_content,
        html_title,
        PUBLICATION_TAGS,
        date_iso,
        author_name,
        author_link,
        about_author,
        CallToActionTitle,
        CallToActionButton,
        CallToActionNo
    )

    file_path = "index.html"
    save_html_to_file(html, file_path)
    print(f"HTML saved to {file_path}")
if __name__ == "__main__":
    main()