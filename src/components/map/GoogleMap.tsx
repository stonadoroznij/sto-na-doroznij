const GoogleMap = () => {
  return (
    <div className="mapouter w-full h-1/2">
      <div className="gmap_canvas relative w-full h-1/2 bg-coal-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2540.4651523177486!2d29.8011723!3d50.4510623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472b41132fe547ef%3A0x7f6ab8933e76a2db!2z0KHQotCeLCAzRCDRgNC-0LfQstCw0Lsg0YHRhdC-0LTQttC10L3QvdGPLCDRiNC40L3QvtC80L7QvdGC0LDQtiDQvdCwINCU0L7RgNC-0LbQvdGW0Lk!5e0!3m2!1suk!2sua!4v1701211235927!5m2!1suk!2sua"
          style={{ width: '100%', aspectRatio: 'auto 4 / 2' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default GoogleMap
