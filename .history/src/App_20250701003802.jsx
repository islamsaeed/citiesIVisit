<BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<HomePage />} /> */}
    <Route index element={<HomePage />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="product" element={<Product />} />
    <Route path="app" element={<AppLayout />}>
      <Route index element={<CityList />} />
      <Route path="cities" element={<CityList />}></Route>
      <Route path="countries" element={<p>List of countries</p>}></Route>
      <Route path="form" element={<p>Form element</p>}></Route>
    </Route>
    <Route path="*" element={<PageNotFound />} />
    <Route path="login" element={<Login />} />
  </Routes>
</BrowserRouter>;
