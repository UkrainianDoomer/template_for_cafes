

export default function GoogleMap() {
    return(
        <div className="map-container" id="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39084.15672226012!2d20.972932577133182!3d52.247746512262935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc661b455407%3A0x2019a146fb49c9be!2z0JrQvtGA0L7Qu9C10LLRgdC60LjQuSDQt9Cw0LzQvtC6!5e0!3m2!1sru!2spl!4v1746298057504!5m2!1spl!2spl"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa"
            ></iframe>
        </div>
    );
}