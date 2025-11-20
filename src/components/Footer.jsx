export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-inner">
        <div>
          <h4>Contact Us</h4>
          <p><strong>Phone:</strong> <a href="tel:+919742818488">9742818488</a></p>
          <p><strong>Email:</strong> <a href="mailto:darshanhiremath28@gmail.com">darshanhiremath28@gmail.com</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/Mixology_Magic" target="_blank" rel="noopener">Mixology_Magic</a></p>
        </div>
        <div className="muted tiny">© {year} Mixology Magic. All rights reserved.</div>
      </div>
    </footer>
  )
}


