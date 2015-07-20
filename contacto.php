<div class="cover" id="contacto">
	<div class="cover-degrade">
		<div class="encuadre">
			<div class="cover-texto">
				¡Contactate con nosotros!
				<div class="cover-texto-parrafo" id="contacto">Llená el formulario de contacto para contactarnos con vos.</div>
				<!-- bloque confirmacion de envio oculto  -->
				<div id="c_information" class="hide"><p></p></div>
				<!-- fin bloque confirmacion de envio -->

				<!-- inicio formulario -->
				<form id="c_form" name="contact">
					<div>
						<input name="nombre" id="campo-nombre" type="text" class="c_input" placeholder="Nombre..."/>
						<input name="telefono"  id="campo-telefono" type="text" class="c_input" placeholder="Teléfono..."/>
						<input name="email"  id="campo-correo" type="text" class="c_input" placeholder="E-mail..."/>
						<textarea name="mensaje"  id="c_msg"placeholder="Mensaje..."></textarea>
					</div>
					<div class="correo-error" style="display: none;"><div class="correo-error-titulo">No se puede enviar el mail</div></div>
					<!-- boton enviar  -->
					<div id="c_btns">
						<input name="send"onclick="EnvioCorreo()" type="button" value="Enviar"class="btn-b" id="c_enviar"></input>
					</div>
				</form>
			<!-- fin formulario -->
			</div>
		</div>
	</div>
</div>

<!-- Importamos libreria jQuery y nuestro script para validacion y envio-->
<script type="text/javascript"src="http://code.jquery.com/jquery-1.10.2.min.js"></script>