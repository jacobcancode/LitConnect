---
layout: post 
search_exclude: true
permalink: /relaxing
menu: nav/shared_interests.html
---

{% block background %}
    <script src="{{ url_for('static', filename='js/three.r119.min.js') }}"></script>
    <script src="{{ url_for('static', filename='js/vanta.clouds2.min.js') }}"></script>
    <script>
        VANTA.CLOUDS2({
            el: "#body_background",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            skyColor: 0x4087af,
            cloudColor: 0x294572,
})
</script>
{% endblock %}

</html>