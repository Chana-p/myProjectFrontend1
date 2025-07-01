import { createAsyncThunk } from '@reduxjs/toolkit';

export const addProductThunk = createAsyncThunk(
  'products/addProduct',
  async (productData, { rejectWithValue }) => {
    try {
      console.log("addProductThunk", productData);
    var goodUrl = productData.ppicture ? productData.ppicture.replace("https://res.cloudinary.com/", "") : "";
      console.log("goodUrl", goodUrl );
      
      // וודא שכל השדות הנדרשים קיימים ובפורמט הנכון
      const productToAdd = {
        prodId: 0, // השרת יקצה ID
        pname: productData.pname,
        psum: parseInt(productData.psum) || 0, // המרה למספר
        pprice: parseFloat(productData.pprice) || 0, // המרה למספר
        pimporter: productData.pimporter || "ש.ל. יבוא ושיווק",
        pcompany: productData.pcompany || "א.א בנאים ",
        pcategory: productData.pcategory || "כלי עבודה",
        ppicture: goodUrl || "",
        pdescription: productData.pdescription || ""
      };
      
      console.log("Sending to server:", productToAdd);
      
      const response = await fetch('https://myFirstProjectBackend.onrender.com/api/Products/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(productToAdd)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Product added successfully:", data);
      return data;
      
    } catch (error) {
      console.error('Add product error:', error);
      return rejectWithValue(error.message);
    }
  }
);
