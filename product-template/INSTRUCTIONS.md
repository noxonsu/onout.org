# Instructions for Adding New Products to onout.org

## Step 1: Create Product Directory
1. Create a new directory in the root of the onout.org repository with a descriptive name for your product
   Example: `mkdir /root/onout.org/my-new-product`
2. Create the standard directory structure:
   ```
   my-new-product/
   ├── index.html          # Main product page
   ├── price.md            # Pricing information
   ├── README.md           # Product documentation
   ├── css/                # Stylesheets (optional)
   ├── js/                 # JavaScript files (optional)
   └── images/             # Image assets (optional)
   ```

## Step 2: Create Basic Product Page
1. Copy the template index.html to your product directory
2. Update the following elements:
   - `<title>`: Change to your product title
   - `<meta name="description">`: Update with a brief product description (under 160 characters)
   - `<h1>`: Product title
   - `<p class="lead">`: Brief product description

## Step 3: Add Contact Form
1. Add a contact form to allow potential customers to reach out
2. Use the mailto protocol for simplicity:
   ```html
   <form action="mailto:support@onout.org?subject=Product Inquiry&body=I'm interested in your product: " method="GET">
       <div class="mb-4">
           <label for="contact_info" class="form-label fw-medium">Contact Information</label>
           <input type="text" class="form-control" id="contact_info" name="contact_info" placeholder="Email or Telegram" required>
       </div>
       <button type="submit" class="btn btn-primary w-100 py-3 fw-semibold">Submit Request</button>
   </form>
   ```

## Step 4: Create Pricing Information
1. Copy the price.md template to your product directory
2. Update with your product's pricing details
3. Use the required HTML format with accordion structure

## Step 5: Add Product Documentation
1. Copy the README.md template to your product directory
2. Update with product details, features, and contact information

## Step 6: Enhance with Additional Sections (Optional)
As needed, you can add the following sections to your product page:
- Problem/Solution section
- Features/benefits section
- How it works workflow
- Pricing details
- Testimonials/case studies
- FAQ section

## Best Practices
1. Keep meta descriptions under 160 characters
2. Keep page titles under 60 characters
3. Use relevant keywords for SEO
4. Ensure the page is mobile responsive
5. Test all functionality before publishing
6. Follow the existing design patterns and styles

## Example Product Structure
```
/product-name/
├── index.html          # Main product page
├── price.md            # Pricing information
├── README.md           # Product documentation
├── css/                # Stylesheets
│   └── styles.css      # Custom styles
├── js/                 # JavaScript files
│   └── app.js          # Custom scripts
└── images/             # Image assets
```
