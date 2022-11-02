package org.anthaathi.commerce.product.entity

import org.hibernate.annotations.Type
import java.io.Serializable
import java.time.OffsetDateTime
import java.util.*
import javax.persistence.*

@Entity
@Cacheable
@Table(name = "directus_files")
open class DirectusFile : Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    open var id: UUID? = null

    @Column(name = "storage", nullable = false)
    open var storage: String? = null

    @Column(name = "filename_disk")
    open var filenameDisk: String? = null

    @Column(name = "filename_download", nullable = false)
    open var filenameDownload: String? = null

    @Column(name = "title")
    open var title: String? = null

    @Column(name = "type")
    open var type: String? = null

    @Column(name = "uploaded_on", nullable = false)
    open var uploadedOn: OffsetDateTime? = null

    @Column(name = "modified_on", nullable = false)
    open var modifiedOn: OffsetDateTime? = null

    @Column(name = "charset", length = 50)
    open var charset: String? = null

    @Column(name = "filesize")
    open var filesize: Long? = null

    @Column(name = "width")
    open var width: Int? = null

    @Column(name = "height")
    open var height: Int? = null

    @Column(name = "duration")
    open var duration: Int? = null

    @Column(name = "embed", length = 200)
    open var embed: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "description")
    open var description: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "location")
    open var location: String? = null

    @Type(type = "org.hibernate.type.TextType")
    @Column(name = "tags")
    open var tags: String? = null

    @OneToMany(mappedBy = "directusFiles")
    open var productFiles: MutableSet<org.anthaathi.commerce.product.entity.ProductFile> = mutableSetOf()

    /*
            TODO [JPA Buddy] create field to map the 'metadata' column
             Available actions: Define target Java type | Uncomment as is | Remove column mapping
            @Column(name = "metadata", columnDefinition = "json")
            open var metadata: Any? = null
        */
    companion object {
        private const val serialVersionUID = 3682294183104993179L
    }
}
