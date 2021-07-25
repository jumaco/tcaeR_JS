

function NavBar() {
	return (
		<div className="contenedor">
			<div className="principal">
				<ul>
					<li>Home</li>
					<li>Acerca de</li>
					<li>Servicios
						<ul>
							<li>Instalación CCTV</li>
							<li>Mantenimiento CCTV</li>
							<li>Ampliación</li>
							<li>Presupuestos</li>
						</ul>
					</li>
					<li>Productos
						<ul>
							<li>Cámaras<span>8 </span></li>
							<li>DVR<span>6 </span></li>
							<li>Monitores<span>5 </span></li>
							<li>Accesorios<span>18</span></li>
							<li>Genéricos<span>25</span></li>
						</ul>
					</li>
					<li>Contacto</li>
				</ul>
			</div>
		</div>
	)
}

export default NavBar;